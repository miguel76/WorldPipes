/* From js object to RDF (N-Quads) */

/** 
 * jsonld.toRDF = function(input, options, callback);
 * Outputs the RDF dataset found in the given JSON-LD object.
 *
 * @param input the JSON-LD input.
 * @param [options] the options to use:
 *          [base] the base IRI to use.
 *          [expandContext] a context to expand with.
 *          [format] the format to use to output a string:
 *            'application/nquads' for N-Quads.
 *          [produceGeneralizedRdf] true to output generalized RDF, false
 *            to produce only standard RDF (default: false).
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 * @param callback(err, dataset) called once the operation completes.
 */

var JsonToServer = {};

JsonToServer._componentsBase = "components/";

JsonToServer._pipelineContext = { 
  "@context" : {
    "@vocab" : "http://www.swows.org/pipeline#",
    "Code" : "@id",
    "ConnectedComponentCode" : {
      "@type" : "@id"
    },
    "Component" : "@type",
    "Id" : "@id",
    "X" : null,
    "Y" : null
  }
}

JsonToServer._layoutContext = { 
  "@context" : {
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "pipe" : "http://www.swows.org/pipeline#",
    "Code" : "@id",
    "ConnectedComponentCode" : {
      "@id": "pipe:ConnectedComponentCode",
      "@type" : "@id"
    },
    "Component" : "@type",
    "Id" : "@id",
    "X" : {
      "@id": "pipe:X",
      "@type" : "xsd:integer"
    },
    "Y" : {
      "@id": "pipe:Y",
      "@type" : "xsd:integer"
    }
  }
}

JsonToServer._combinedContext = { 
  "@context" : {
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "@vocab" : "http://www.swows.org/pipeline#",
    "ConnectedComponentCode" : {
      "@type" : "@id"
    },
    "Component" : "@type",
    "Id" : "@id"
  }
}

JsonToServer._conversionContext = JsonToServer._componentsBase;

JsonToServer._jsonEncode =
  function (key, value) {
    if (value == null || value === '') {
      return undefined;
    }
    if (key === 'Code') {
      JsonToServer._conversionContext = JsonToServer._componentsBase + value + '/';
      return JsonToServer._componentsBase + value;
    }
    if (key === 'ConnectedComponentCode') {
      return JsonToServer._componentsBase + value;
    }
    if (key === 'Id') {
      return JsonToServer._conversionContext + value;
    }
    if (typeof value === 'number') {
      return String(value);
    }
    return value;
  };

JsonToServer._jsonConvertValues =
  function (obj, convert) {
    return JSON.parse( JSON.stringify( obj, convert ) );
  };

JsonToServer._generateSaveNQ =
  function (graphStore, graphName) {
    return function(err, nqString) {

      if (err != null) { alert("JSON-LD conversion error: " + err); return; };

      try{var request = new XMLHttpRequest();}
      catch(error){var request = null;}
  
      if (request == null) {
        alert("ERROR! Invalid Request");
      } else {
        request.open("PUT",graphStore + encodeURI(graphName), false);
        request.setRequestHeader("Content-Type","application/n-quads");
        request.send(nqString);
        if(request.status == 200 || request.status == 201 || request.status == 204) {
//          alert("Data sent to " + graphName);
        }
        if(request.status == 400 ){alert("Parse error");}
        if(request.status == 500 ){alert("Server error");} 
        if(request.status == 503 ){alert("Service not available");}
      }
    };
  };


JsonToServer.savePipelineAndLayout = function (graphStore, pipelineURI, layoutURI, componentsVector) {

  var jsonModified = JsonToServer._jsonConvertValues(componentsVector, JsonToServer._jsonEncode);
//  alert(JSON.stringify(jsonModified));

  jsonld.toRDF(
      jsonModified,
      { "base" : pipelineURI, 
        "expandContext" : JsonToServer._pipelineContext,
        "format" : "application/nquads"
      },
      JsonToServer._generateSaveNQ(graphStore, pipelineURI) );

  jsonld.toRDF(
      jsonModified,
      { "base" : pipelineURI, 
        "expandContext" : JsonToServer._layoutContext,
        "format" : "application/nquads"
      },
      JsonToServer._generateSaveNQ(graphStore, layoutURI) );

};


/* From RDF (N-Quads) to js object */

/** jsonld.fromRDF
 *
 * Converts an RDF dataset to JSON-LD.
 *
 * @param dataset a serialized string of RDF in a format specified by the
 *          format option or an RDF dataset to convert.
 * @param [options] the options to use:
 *          [format] the format if input is not an array:
 *            'application/nquads' for N-Quads (default).
 *          [useRdfType] true to use rdf:type, false to use @type
 *            (default: false).
 *          [useNativeTypes] true to convert XSD types into native types
 *            (boolean, integer, double), false not to (default: false).
 *
 * @param callback(err, output) called once the operation completes.
 */

/** jsonld.compact(input, ctx, options, callback)
 * Performs JSON-LD compaction.
 *
 * @param input the JSON-LD input to compact.
 * @param ctx the context to compact with.
 * @param [options] options to use:
 *          [base] the base IRI to use.
 *          [compactArrays] true to compact arrays to single values when
 *            appropriate, false not to (default: true).
 *          [graph] true to always output a top-level graph (default: false).
 *          [expandContext] a context to expand with.
 *          [skipExpansion] true to assume the input is expanded and skip
 *            expansion, false not to, defaults to false.
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 * @param callback(err, compacted, ctx) called once the operation completes.
 */

//JsonToServer._jsonLdProcessor = new JsonLdProcessor();

JsonToServer._loadNQ = function (graphStore, graphName) {

      try{var request = new XMLHttpRequest();}
      catch(error){var request = null;}
  
      if (request == null) {
        alert("ERROR! Invalid Request");
      } else {
        request.open("GET",graphStore + encodeURI(graphName), false);
        request.setRequestHeader("Accept","application/n-triples");
        request.send();
        if(request.status == 200 || request.status == 201 || request.status == 204) {
//          alert("Data received from " + graphName);
          return request.responseText;
        }
        if(request.status == 400 ){alert("Parse error");}
        if(request.status == 500 ){alert("Server error");} 
        if(request.status == 503 ){alert("Service not available");}
      }

}

JsonToServer._compact = function(input, pipelineURI, callback) {
  jsonld.compact(
    input,
    JsonToServer._combinedContext,
    { "base" : pipelineURI, 
      "skipExpansion" : true,
      "compactArrays" : false
    },
    function(err, compacted, ctx) { callback(err,compacted) } );
}

JsonToServer._theFrame = {
  "@context" : JsonToServer._combinedContext["@context"],
  "@type" : ["input","inputdefault","output","outputdefault","construct","updatable","pipe","union","dataset"], 
  "Code" : { "@default" : "@id"},
  "InputList" : { 
    "ConnectedComponentCode" : {
      "@embed":false
    }
  }
}

JsonToServer._frame = function(input, callback) {
  jsonld.frame(
    input,
    JsonToServer._theFrame,
    { "base" : pipelineURI, 
      "skipExpansion" : true,
      "omitDefault" : false
    },
    function(err, framed, ctx) { callback(err,framed["@graph"]) } );
}

JsonToServer.loadPipelineAndLayout = function(graphStore, pipelineURI, layoutURI, callback) {
  jsonld.fromRDF(
    JsonToServer._loadNQ(graphStore,pipelineURI) + JsonToServer._loadNQ(graphStore,layoutURI),
    { "format" : "application/nquads",
      "useNativeTypes": true },
    function(err, output) {
      if (err)
        callback(err, output);
      else {
//        alert("From RDF:" + JSON.stringify(output));
        JsonToServer._frame(
          output,
          function(err, framed) {
            if (err)
              callback(err, framed);
            else {
              callback(null, JsonToServer._jsonConvertValues(framed, JsonToServer._jsonDecode));
            }
          }               
        );
      }
    }
  );
}

JsonToServer._conversionContext = "";
JsonToServer._componentId = "";

JsonToServer._jsonDecode = function (key, value) {
    if (key === "Id") {
      var id = value.substr(JsonToServer._componentsBase.length);
      if (id.search("/") > 0)
        return id.substr(JsonToServer._conversionContext.length);
      else {
        JsonToServer._conversionContext = id + '/';
        JsonToServer._componentId = id;
        return undefined;
      }
    }
    if (value === "@id") {
      return JsonToServer._componentId;
    }
    if (key === "Component" && value instanceof Array) {
      return value[0];
    }
    if (key === "InputList" && !(value instanceof Array) ) {
      if (value == null)
        return [];
      return [value];
    }
    if (key === "ConnectedComponentCode") {
      return String(value).substr(JsonToServer._componentsBase.length);
    }

    return value;

};



